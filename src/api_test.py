import os
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Minimal function to test OpenAI's chat completion API
def test_generate_text(model="gpt-4o"):
    prompt = "Discuss the importance of spine health and how Ashtanga Yoga can help improve flexibility and balance."

    try:
        # Call the API with a simple test prompt
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )

        # Print the response content
        print("Generated Text:\n", response.choices[0].message.content)

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")

# Run the minimal test
test_generate_text()


