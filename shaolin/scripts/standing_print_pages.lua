-- Turn the page-by-page Markdown record into one two-column print sheet per
-- source page. The preamble remains in the Markdown reference but is omitted
-- from the 14-sheet print edition.

local function starts_with(value, prefix)
  return value:sub(1, #prefix) == prefix
end

local function page_number(header)
  return pandoc.utils.stringify(header.content):match("Printed page (%d+)")
end

local function make_sheet(blocks)
  local number = page_number(blocks[1]) or ""
  local source = {
    pandoc.RawBlock(
      "html",
      '<div class="source-label">ORIGINAL SOURCE · PRINTED PAGE ' .. number .. '</div>'
    )
  }
  local text = {}
  local image_moved = false

  for _, block in ipairs(blocks) do
    if not image_moved and block.t == "Figure" then
      table.insert(source, block)
      image_moved = true
    elseif not image_moved and block.t == "Para" and #block.content == 1 and block.content[1].t == "Image" then
      table.insert(source, block)
      image_moved = true
    elseif block.t == "HorizontalRule" then
      -- The Markdown rule separates source pages; the sheet itself supplies
      -- the physical page break and needs no trailing rule element.
    elseif block.t == "Para" and starts_with(pandoc.utils.stringify(block.content), "Visible figure labels:") then
      table.insert(text, pandoc.Div({ block }, pandoc.Attr("", { "figure-index" })))
    else
      table.insert(text, block)
    end
  end

  return pandoc.Div(
    {
      pandoc.Div(source, pandoc.Attr("", { "source-column" })),
      pandoc.Div(text, pandoc.Attr("", { "text-column" }))
    },
    pandoc.Attr("page-" .. number, { "sheet" }, { ["data-source-page"] = number })
  )
end

function Pandoc(doc)
  local output = {}
  local current = nil

  local function flush()
    if current and #current > 0 then
      table.insert(output, make_sheet(current))
    end
    current = nil
  end

  for _, block in ipairs(doc.blocks) do
    if block.t == "Header" and block.level == 2 and
       starts_with(pandoc.utils.stringify(block.content), "Printed page ") then
      flush()
      current = { block }
    elseif current then
      table.insert(current, block)
    end
  end
  flush()

  return pandoc.Pandoc(output, doc.meta)
end
