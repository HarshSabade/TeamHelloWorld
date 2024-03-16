from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    uploaded_file = request.files['file']
    if uploaded_file:
        # Save the uploaded file to a specific location
        uploaded_file.save('uploads/' + uploaded_file.filename)
        return 'File uploaded successfully!'
    else:
        return 'No file uploaded.'

if __name__ == '__main__':
    app.run(debug=True)