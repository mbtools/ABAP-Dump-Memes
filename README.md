# Memes for ABAP Dumps

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

## Add Memes

Upload memes to the `/img/` folder using `<RUNTIME_ERROR>.mp4` or `<EXCEPTION>.mp4` as a filename.

Note: You can use https://twdownload.com/ to download the `mp4` file from a tweet.
