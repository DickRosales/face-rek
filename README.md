# face-rek

Facial recognition for pi


# Display Image on screen
```sudo fbi -T 2 -a <IMAGE NAME>```

# Turn OFF hdmi output
```tvservice -o```

# Turn ON hdmi output
```tvservice -p```

# Make Pi Display on TV
``` xset -display :0 dpms force on```

# Taking Picture with raspicam 
```raspistill -vf -hf -o <IMAGE NAME>```

# Kill fbi from cli
```sudo killall -2 fbi```
OR
```sudo killall -3 fbi```

# Check free space on File System
```df -Bm```

# Shutdown Raspberry pi 
```sudo shutdown -h now```