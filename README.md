# nxt-phone
hi you shouldnt use this but if you do you need to do it in termux with termux api installed.

create a fifo at ~/.tts
```
mkfifo ~/.fifo
```
run a loop to catch all data in the fifo as it becomes available to keep the engine ready
```
while true; do cat ~/.tts; done | termux-tts-speak
```
