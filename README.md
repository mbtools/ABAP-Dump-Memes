# Memes for ABAP Dumps

![image](https://user-images.githubusercontent.com/59966492/157306008-46416436-ab0f-41dc-b136-9b5d1b90a44c.png)

## Installation

1. Edit include `MS380F10` (Note: In recent releases, this program is protected so enhancement are not allowed)
2. At the end of `FORM INIT.` add the following code

```abap
FORM init.
...

  DATA url TYPE string.
  url = |https://mbtools.github.io/ABAP-Dump-Memes/index.html?error={ cerrid }|.
  IF exc_name IS NOT INITIAL.
    url = url && |&exception={ exc_name }|.
  ENDIF.
  cl_abap_browser=>show_url(
    title  = 'Crash, Boom, Bang'
    size   = cl_abap_browser=>xlarge
    url    = url
    dialog = abap_false ).
  
ENDFORM.
```

3. Activate the include

## Usage

Run some code that causes a dump in SAP GUI 😁

[Test for Runtime Error](https://mbtools.github.io/ABAP-Dump-Memes/index.html?exception=ITAB_LINE_NOT_FOUND)

[Test for Exception](https://mbtools.github.io/ABAP-Dump-Memes/index.html?exception=CX_SY_ZERODIVIDE)

## Add Memes

Upload memes to the `/img/` folder using `<RUNTIME_ERROR>.mp4` or `<EXCEPTION>.mp4` as a filename.

Note: You can use https://twdownload.com/ to download the `mp4` file from a tweet.
