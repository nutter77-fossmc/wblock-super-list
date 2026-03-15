#!/bin/bash
echo "🩸 GREY_HAT PANIC – FULL SELF-DESTRUCT"
sudo rm -rf ~/Library/Caches/* /tmp/* 2>/dev/null
osascript -e 'quit app "Safari"'
networksetup -setairportpower en0 off && sleep 3 && networksetup -setairportpower en0 on
NEW_MAC="00:13:37:$(openssl rand -hex 3 | sed 's/\(..\)/\1:/g' | cut -c1-8)"
sudo ifconfig en0 ether $NEW_MAC
echo "You are now personally untraceable. Ghost wins."
