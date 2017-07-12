import platform, os
def winGetClipboard():
    ctypes.windll.user32.OpenClipboard(0)
    pcontents = ctypes.windll.user32.GetClipboardData(1) # 1 is CF_TEXT
    data = ctypes.c_char_p(pcontents).value
    #ctypes.windll.kernel32.GlobalUnlock(pcontents)
    ctypes.windll.user32.CloseClipboard()
    return data
def winSetClipboard(text):
    text = str(text)
    GMEM_DDESHARE = 0x2000
    ctypes.windll.user32.OpenClipboard(0)
    ctypes.windll.user32.EmptyClipboard()
    try:
        hCd = ctypes.windll.kernel32.GlobalAlloc(GMEM_DDESHARE, len(bytes(text))+1)
    except TypeError:
        hCd = ctypes.windll.kernel32.GlobalAlloc(GMEM_DDESHARE, len(bytes(text, 'ascii'))+1)
    pchData = ctypes.windll.kernel32.GlobalLock(hCd)
    try:
        ctypes.cdll.msvcrt.strcpy(ctypes.c_char_p(pchData), bytes(text))
    except TypeError:
        ctypes.cdll.msvcrt.strcpy(ctypes.c_char_p(pchData), bytes(text, 'ascii'))
    ctypes.windll.kernel32.GlobalUnlock(hCd)
    ctypes.windll.user32.SetClipboardData(1, hCd)
    ctypes.windll.user32.CloseClipboard()
def macSetClipboard(text):
    text = str(text)
    outf = os.popen('pbcopy', 'w')
    outf.write(text)
    outf.close()
def macGetClipboard():
    outf = os.popen('pbpaste', 'r')
    content = outf.read()
    outf.close()
    return content
def gtkGetClipboard():
    return gtk.Clipboard().wait_for_text()
def gtkSetClipboard(text):
    global cb
    text = str(text)
    cb = gtk.Clipboard()
    cb.set_text(text)
    cb.store()
def qtGetClipboard():
    return str(cb.text())
def qtSetClipboard(text):
    text = str(text)
    cb.setText(text)
def xclipSetClipboard(text):
    text = str(text)
    outf = os.popen('xclip -selection c', 'w')
    outf.write(text)
    outf.close()
def xclipGetClipboard():
    outf = os.popen('xclip -selection c -o', 'r')
    content = outf.read()
    outf.close()
    return content
def xselSetClipboard(text):
    text = str(text)
    outf = os.popen('xsel -i', 'w')
    outf.write(text)
    outf.close()
def xselGetClipboard():
    outf = os.popen('xsel -o', 'r')
    content = outf.read()
    outf.close()
    return content
if os.name == 'nt' or platform.system() == 'Windows':
    import ctypes
    getcb = winGetClipboard
    setcb = winSetClipboard
elif os.name == 'mac' or platform.system() == 'Darwin':
    getcb = macGetClipboard
    setcb = macSetClipboard
elif os.name == 'posix' or platform.system() == 'Linux':
    xclipExists = os.system('which xclip') == 0
    if xclipExists:
        getcb = xclipGetClipboard
        setcb = xclipSetClipboard
    else:
        xselExists = os.system('which xsel') == 0
        if xselExists:
            getcb = xselGetClipboard
            setcb = xselSetClipboard
        try:
            import gtk
            getcb = gtkGetClipboard
            setcb = gtkSetClipboard
        except Exception:
            try:
                import PyQt4.QtCore
                import PyQt4.QtGui
                app = PyQt4.QApplication([])
                cb = PyQt4.QtGui.QApplication.clipboard()
                getcb = qtGetClipboard
                setcb = qtSetClipboard
            except:
                raise Exception('Pyperclip requires the gtk or PyQt4 module installed, or the xclip command.')
copy = setcb
paste = getcb
