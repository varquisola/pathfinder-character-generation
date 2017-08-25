import sys

def main(css_file):
    f = open(css_file,'r+')
    out = open('out.txt', 'w')
    for line in f:
        line = line.replace('}', '}\n')
        out.write(line)
    f.close()


if __name__ == "__main__":
  main(sys.argv[1])
