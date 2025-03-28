# Read from the file file.txt and output the tenth line to stdout.

# 1
awk 'NR == 10' file.txt

# 2
sed -n '10p' file.txt