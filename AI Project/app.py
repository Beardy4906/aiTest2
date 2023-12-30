from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = 'sk-...ACcv'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.get_json()
    prompt = data['prompt']

    response = openai.Completion.create(
        engine="text-davinci-002",  # Choose the appropriate engine
        prompt=prompt,
        max_tokens=150  # Adjust as needed
    )

    return jsonify({'response': response.choices[0].text})

if __name__ == '__main__':
    app.run(port=5000)
