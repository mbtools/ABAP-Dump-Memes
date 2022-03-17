CONSTANTS version TYPE i VALUE 2.

DATA url TYPE string.
DATA text TYPE string.
DATA texts TYPE TABLE OF string.

url = |https://mbtools.github.io/ABAP-Dump-Memes/index_v2.html?version={ version }|.
IF cerrid IS NOT INITIAL.
  url = url && |&error={ to_upper( cerrid ) }|.
  SELECT tline FROM snapt INTO TABLE texts WHERE langu = 'E' AND errid = cerrid AND ttype = 'K' ORDER BY PRIMARY KEY.
  CONCATENATE LINES OF texts INTO text SEPARATED BY space.
ENDIF.
IF exc_name IS NOT INITIAL.
  url = url && |&exception={ to_upper( exc_name ) }|.
  SELECT SINGLE descript FROM seoclasstx INTO text WHERE langu = 'E' AND clsname = exc_name.
ENDIF.
IF text IS NOT INITIAL.
  url = url && |&text={ text }|.
ENDIF.

cl_abap_browser=>show_url(
  title        = 'Crash, Boom, Bang!'
  size         = cl_abap_browser=>xlarge
  url          = escape( val = url format = cl_abap_format=>e_url )
  dialog       = abap_false
  context_menu = abap_true ).
