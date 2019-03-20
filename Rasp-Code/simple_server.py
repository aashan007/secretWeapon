import socket
import sys


try:
        s = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        port = sys.argv[1]
        print("socket successfully created")
        print port
        s.bind(('',int(port)))
        s.listen(5)
        print("Socket is listening")
        c, addr = s.accept()
        print ('Got connection from',addr)
        c.send("Connected to server")
        try:
            while True:
                recvd = c.recv(10)
                print(recvd)

        except:
            c.close()

finally:

	print("We're Exiting this shithole")
	s.close()

