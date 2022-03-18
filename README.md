# Memes for ABAP Dumps

![image](https://user-images.githubusercontent.com/59966492/158885000-42888f7c-6707-48f6-8e5f-685d3ecf0d4a.png)

## Installation

1. Install this repo using [abapGit](https://github.com/abapGit/abapGit)
2. Edit include `MS380F10` (Note: In recent releases, this program is protected so enhancement are not allowed)
3. At the end of `FORM INIT.` add the following code

```abap
FORM init.
...
*{   INSERT         &$&$&$&$                                         
  INCLUDE zhack_st22_memes.
*}   INSERT

ENDFORM.
```

4. Activate the includes `ZHACK_ST22_MEMES` and `MS380F10`.

Alternatively, you can copy the code from [here](https://github.com/mbtools/ABAP-Dump-Memes/blob/main/src/zhack_st22_memes.prog.abap)
directly into include `MS380F10`.

## Usage

There are there modes:

Parameter Value | Mode          | Source for Memes
----------------|---------------|------------------------
initial         | Regular dump (default) | n/a
1               | **Curated memes** for selected runtime errors and exceptions | See [`/img`](https://github.com/mbtools/ABAP-Dump-Memes/tree/main/img) folder
2               | **Random memes** matching the description of the error or exception | Reddit search on /r/Meme community 

*Beware: Mode 2 is for the brave since you don't know what you will get!* 😈

You set the mode using a parameter `ZHACK_ST22_MEMES` in transactions `SU01` or `SU3`:

![image](https://user-images.githubusercontent.com/59966492/158844133-2f542546-e763-4fef-9f5c-b6e7cbaa8bbc.png)

## Trigger

Run some code that causes a dump in SAP GUI 😁. For example:

```abap
REPORT ztest_x.
MESSAGE 'This is a runtime error' TYPE 'X'.
* or
DATA(exc) = NEW cx_sy_ref_is_initial( ).
RAISE EXCEPTION exc.
```

## Demos

Here are some examples of what the result will look like:

[Mode 1: Runtime Error](https://mbtools.github.io/ABAP-Dump-Memes/index.html?version=1&exception=ITAB_LINE_NOT_FOUND)

[Mode 1: Exception](https://mbtools.github.io/ABAP-Dump-Memes/index.html?version=1&exception=CX_SY_ZERODIVIDE)

[Mode 2: Random Meme](https://mbtools.github.io/ABAP-Dump-Memes/index.html?version=2&text=Message%20type%20is%20unknown.)

## Add Memes

Upload memes to the `/img/` folder using `<RUNTIME_ERROR>.mp4` or `<EXCEPTION>.mp4` as a filename.

Note: You can use https://twdownload.com/ to download the `mp4` file from a tweet.
