# mega-keyboard

## whats in the Github:
* WireIt/ is a plugin for Kicad that I use to create new net names when I have to chaing the LEDs together.
* config.YAML is the code used by ergogen to design the keyboard
* pcbs/ contains the outputs from ergogen that we edited in KiCad to create the PCB design.
* datasheets/ and downloaded_footprints/ are all reference materials
* footprints/ are all .js files that describe custom footprints that can be used in Ergogen code and in KiCad.

## Links we used:
* The [Ergogen guide by FlatFootFox](https://flatfootfox.com/ergogen-introduction/) is a great guide for how to do all this. This was our teacher (along with BYU's IEEE Club)
* The [Ergogen Unofficial Website](https://ergogen.cache.works/) is very similar to the [Ergogen Official Website](https://ergogen.xyz/) except that it is a little better at rendering something things in real time. Eventually we did switch to running Ergogen locally on node (described in Flatfoot's guide? I think) which is very helpful.
* [QMK Firmware](https://qmk.fm/) is used to program the board [This is a work in progress - more later]
* [Carter's GitHub](https://github.com/Virginia2244/BYU-IEEE-Keyboard-Project) that we used as a template for the YAML and which saved our bacon more than once.

## For the footprint creation and KiCad stuff:
* the documentation for the LED we chose comes from the same [place we bought the LEDs](https://www.adafruit.com/product/4684), I used this [footprint from SNAP EDA](https://www.snapeda.com/parts/WS2812-2020/Worldsemi/view-part/?company=BYU&) as a base for the ergogen code in footprints/epicpantalones/WS2812, and this [choc switch datasheet](https://cdn-shop.adafruit.com/product-files/5113/CHOC+keyswitch_Kailh-CPG135001D01_C400229.pdf) to make sure that it fit and was aligned correctly.
* The ergogen code I wrote is based on this guide to [converting kicads to ergogen footprints](https://nilnil.notion.site/Convert-Kicad-Footprints-to-Ergogen-8340ce87ad554c69af4e3f92bc9a0898#03eb03c468ba49feabb4847096c0ff94), and a little bit of reference from this [LED I used as a code basis](https://github.com/infused-kim/kb_ergogen_fp/blob/main/smd_0805.js).

## The actual parts that we purchased:
* The PCB was ordered from [JLCPCB](https://jlcpcb.com/) - check them out here. Insanely cheap tbh for what we got (13$ plus shipping, so like 30$ for 5 boards)
* The keys themselves came from the BYU IEEE club, but we chose these [frosted black choc swithc keycaps](https://a.co/d/dT4MgD5)
* Like I mentioned above, the LEDs come from [Adafruit](https://www.adafruit.com/product/4684)
* Our controller head unit is an [Arduino Pro Micro](https://www.sparkfun.com/products/12640) a board I didn't know existed until this project, and they are connected via an audio connector that was also provided (I'll see if I can get the links)
* IEEE also provided hotswap sockets for the choc switches (which is amazing), as well as the control flow diodes.
