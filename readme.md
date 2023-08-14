<center>

# Level 1

</center>

### Change to the specific directory where the log files are located
```
cd /c/ProgramData/NVIDIA
```

### Find all files with the extension ".log"
```
find . -name "*.log"
```

### Find all files with the extension ".log" and display detailed size information
```
find . -name "*.log" -exec ls -lh {} \;
```

### Find all files with the extension ".log", sort them in descending order by size, and show only the largest one
```
find . -name "*.log" -exec du -h {} + | sort -rh | head -n 1
```

### Truncate the log file named "NvContainerWatchdog.log" to display the first 100 lines
```
head -n 100 ./NvContainerWatchdog.log
```

### Save the first 100 lines of the log file "NvContainerWatchdog.log" to a new file named "truncated_log.txt"
```
head -n 100 ./NvContainerWatchdog.log > truncated_log.txt
```

<center>

# Level 2 & 3

</center>

### link :https://swipe-pages.onrender.com/ 

## Run in Local 

### Prerequisites

Before running the API, ensure you have the following software installed:

- Node 18.16.0

### Installation

1.  Clone this repository to your local machine:

    git clone https://github.com/eraltafs/exact-spaces.git

2.  Install the dependencies:
    ```
    cd exact-spaces
    npm install
    ```
3. Run
    ```
    npm start
    ```
4. if you have docker installed then use 
    ```
    docker build -t your_app .          // to build image
    docker run -p 3000:3000 your_app   //to run with docker
    ```
