import serial
import time

# Adjust the serial port to match your Arduino's port
ser = serial.Serial('COM7', 9600)  # Replace 'COM3' with your Arduino's port
time.sleep(2)  # Wait for the connection to initialize

# Open a file to save the data
with open('servo_data.txt', 'w') as f:
    while True:
        line = ser.readline().decode('utf-8').strip()
        print(line)  # Print the data to the console for debugging
        f.write(line + '\n')
        if "Recording Stopped" in line:  # Add a condition to stop recording
            break

ser.close()