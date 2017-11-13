+++
category = "develop"
title = "Generate UUIDs on the Command Line"
date = "2016-09-05"
tags = ["uuid", "uuids", "identifiers", "linux", "os-x", "python", "bash", "uuidgen", "develop", "random-tip"]
path = "blog/develop/generate-uuids-on-the-command-line"

[extra]
id = "1a6a226e-cf19-47fa-b951-27b2f984cfbe"
+++

[UUIDs](https://tools.ietf.org/html/rfc4122) are becoming more popular in
distributed systems, and can increasingly be found in databases and applications.

Sometimes you just need a quick way to generate a UUID, be it for writing
a unit test, manually testing a function or creating some stub data.

Here are some methods for creating random (version 4) UUIDs straight from the command line:

#### uuidgen (Linux and OS X)

```bash
# Single UUID:
uuidgen -r
# 100 UUIDs:
seq 100 | xargs -I -- uuidgen -r 
```

The uuidgen command is available by default on OS X, and should be on most
Linux distros.  
On Debian systems you need the package `uuid-runtime`, on Arch `libutil-linux`.


#### Linux uuid proc file  (Linux only)

The Linux kernel has the special proc file `/proc/sys/kernel/random/uuid`, 
which will yield a new UUID each time it is read.

```bash
# Single UUID:
cat /proc/sys/kernel/random/uuid
# 100 UUIDs:
seq 100 | xargs -I -- cat /proc/sys/kernel/random/uuid
```

#### Python (portable)

Fortunately, Python has the [uuid](https://docs.python.org/2/library/uuid.html)
module in it's standard library, so this method will work on any system with 
a Python installation.

```bash
# Single UUID:
python -c "import uuid; print(uuid.uuid4());"
# 100 UUIDs:
python -c "import uuid; print('\n'.join([str(uuid.uuid4()) for _ in range(0,100)]));"
```

#### uuidgenerator.net

As a measure of last resort, if you have CURL or wget available, 
you can use the website 
[uuidgenerator.net](https://www.uuidgenerator.net), which provides an API for 
generating UUIDs.

```bash
# Single UUID:
curl https://www.uuidgenerator.net/api/version4
# 100 UUIDs:
curl https://www.uuidgenerator.net/api/version4/100

```
