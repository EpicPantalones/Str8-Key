function faceplate_panel_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[119.8278419,-190.0819698],[106.6322503,-115.2460514]]).appendArc([110.6995601,-109.4517557],{"radius":5,"clockwise":true,"large":false}).appendPoint([165.122689,-99.9866003]).appendArc([165.3976705,-99.9466132],{"radius":5,"clockwise":true,"large":false}).appendPoint([190.3451594,-97.0241361]).appendArc([190.6118269,-97.0001152],{"radius":5,"clockwise":true,"large":false}).appendPoint([216.0134379,-95.3962191]).appendArc([216.1971894,-95.3880067],{"radius":5,"clockwise":true,"large":false}).appendPoint([268.0076076,-94.0267008]).appendArc([273.1387457,-98.9813433],{"radius":5,"clockwise":true,"large":false}).appendPoint([273.6728239,-160.1806411]).appendArc([277.265037,-164.9347864],{"radius":5,"clockwise":false,"large":false}).appendPoint([291.5947898,-169.1389224]).appendArc([295.0279316,-175.1886003],{"radius":5,"clockwise":true,"large":false}).appendPoint([285.9815263,-210.168454]).appendArc([279.8616196,-213.7501579],{"radius":5,"clockwise":true,"large":false}).appendPoint([223.5391848,-198.8449483]).appendArc([220.2041105,-192.0855294],{"radius":5,"clockwise":true,"large":false}).appendPoint([221.4785273,-189.0320333]).appendArc([216.6937474,-182.1091275],{"radius":5,"clockwise":false,"large":false}).appendPoint([196.6945992,-182.7916444]).appendArc([196.2613247,-182.825328],{"radius":5,"clockwise":false,"large":false}).appendPoint([175.8720933,-185.3057314]).appendArc([175.6097168,-185.3447384],{"radius":5,"clockwise":false,"large":false}).appendPoint([125.6180686,-194.1381291]).appendArc([119.8278419,-190.0819698],{"radius":5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[117.4606995,-130.5870747],[131.248008,-128.1560002]]).appendPoint([128.8169335,-114.3686917]).appendPoint([115.029625,-116.7997662]).appendPoint([117.4606995,-130.5870747]).close().innerToCAG()
.union(
    new CSG.Path2D([[127.3586457,-186.7211166],[141.1459542,-184.2900421]]).appendPoint([138.7148797,-170.5027336]).appendPoint([124.9275712,-172.9338081]).appendPoint([127.3586457,-186.7211166]).close().innerToCAG()
).union(
    new CSG.Path2D([[120.7600149,-149.298422],[134.5473234,-146.8673475]]).appendPoint([132.1162489,-133.080039]).appendPoint([118.3289404,-135.5111135]).appendPoint([120.7600149,-149.298422]).close().innerToCAG()
).union(
    new CSG.Path2D([[124.0593303,-168.0097693],[137.8466388,-165.5786948]]).appendPoint([135.4155643,-151.7913863]).appendPoint([121.6282558,-154.2224608]).appendPoint([124.0593303,-168.0097693]).close().innerToCAG()
).union(
    new CSG.Path2D([[137.1568546,-127.1141111],[150.9441631,-124.6830366]]).appendPoint([148.5130886,-110.8957281]).appendPoint([134.7257801,-113.3268026]).appendPoint([137.1568546,-127.1141111]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.45617,-145.8254584],[154.2434785,-143.3943839]]).appendPoint([151.812404,-129.6070754]).appendPoint([138.0250955,-132.0381499]).appendPoint([140.45617,-145.8254584]).close().innerToCAG()
).union(
    new CSG.Path2D([[143.7554853,-164.5368057],[157.5427938,-162.1057312]]).appendPoint([155.1117193,-148.3184227]).appendPoint([141.3244108,-150.7494972]).appendPoint([143.7554853,-164.5368057]).close().innerToCAG()
).union(
    new CSG.Path2D([[147.0548007,-183.248153],[160.8421092,-180.8170785]]).appendPoint([158.4110347,-167.02977]).appendPoint([144.6237262,-169.4608445]).appendPoint([147.0548007,-183.248153]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.6283349,-155.274693],[243.6278018,-155.1525215]]).appendPoint([243.5056303,-141.1530546]).appendPoint([229.5061634,-141.2752261]).appendPoint([229.6283349,-155.274693]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.7941391,-174.2739696],[243.793606,-174.1517981]]).appendPoint([243.6714345,-160.1523312]).appendPoint([229.6719676,-160.2745027]).appendPoint([229.7941391,-174.2739696]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.6290965,-155.4492238],[223.6285634,-155.3270523]]).appendPoint([223.5063919,-141.3275854]).appendPoint([209.506925,-141.4497569]).appendPoint([209.6290965,-155.4492238]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.7949007,-174.4485003],[223.7943676,-174.3263288]]).appendPoint([223.6721961,-160.3268619]).appendPoint([209.6727292,-160.4490334]).appendPoint([209.7949007,-174.4485003]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.4625307,-136.2754165],[243.4619976,-136.153245]]).appendPoint([243.3398261,-122.1537781]).appendPoint([229.3403592,-122.2759496]).appendPoint([229.4625307,-136.2754165]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.4632923,-136.4499473],[223.4627592,-136.3277758]]).appendPoint([223.3405877,-122.3283089]).appendPoint([209.3411208,-122.4504804]).appendPoint([209.4632923,-136.4499473]).close().innerToCAG()
).union(
    new CSG.Path2D([[229.2967266,-117.27614],[243.2961935,-117.1539685]]).appendPoint([243.174022,-103.1545016]).appendPoint([229.1745551,-103.2766731]).appendPoint([229.2967266,-117.27614]).close().innerToCAG()
).union(
    new CSG.Path2D([[209.2974881,-117.4506708],[223.296955,-117.3284993]]).appendPoint([223.1747835,-103.3290324]).appendPoint([209.1753166,-103.4512039]).appendPoint([209.2974881,-117.4506708]).close().innerToCAG()
).union(
    new CSG.Path2D([[185.0298667,-119.4432588],[198.9957634,-118.4666681]]).appendPoint([198.0191727,-104.5007714]).appendPoint([184.053276,-105.4773621]).appendPoint([185.0298667,-119.4432588]).close().innerToCAG()
).union(
    new CSG.Path2D([[186.3552397,-138.3969757],[200.3211364,-137.420385]]).appendPoint([199.3445457,-123.4544883]).appendPoint([185.378649,-124.431079]).appendPoint([186.3552397,-138.3969757]).close().innerToCAG()
).union(
    new CSG.Path2D([[187.6806127,-157.3506927],[201.6465094,-156.374102]]).appendPoint([200.6699187,-142.4082053]).appendPoint([186.704022,-143.384796]).appendPoint([187.6806127,-157.3506927]).close().innerToCAG()
).union(
    new CSG.Path2D([[189.0059857,-176.3044096],[202.9718824,-175.3278189]]).appendPoint([201.9952917,-161.3619222]).appendPoint([188.029395,-162.3385129]).appendPoint([189.0059857,-176.3044096]).close().innerToCAG()
).union(
    new CSG.Path2D([[227.4182029,-192.9863442],[240.9722699,-196.4916642]]).appendPoint([244.4775899,-182.9375972]).appendPoint([230.9235229,-179.4322772]).appendPoint([227.4182029,-192.9863442]).close().innerToCAG()
).union(
    new CSG.Path2D([[251.2720298,-180.0365089],[264.8260968,-183.5418289]]).appendPoint([268.3314168,-169.9877619]).appendPoint([254.7773498,-166.4824419]).appendPoint([251.2720298,-180.0365089]).close().innerToCAG()
).union(
    new CSG.Path2D([[246.7811557,-197.9939443],[260.3352227,-201.4992643]]).appendPoint([263.8405427,-187.9451973]).appendPoint([250.2864757,-184.4398773]).appendPoint([246.7811557,-197.9939443]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.6349826,-185.0441089],[284.1890496,-188.5494289]]).appendPoint([287.6943696,-174.9953619]).appendPoint([274.1403026,-171.4900419]).appendPoint([270.6349826,-185.0441089]).close().innerToCAG()
).union(
    new CSG.Path2D([[266.1441086,-203.0015443],[279.6981756,-206.5068643]]).appendPoint([283.2034956,-192.9527973]).appendPoint([269.6494286,-189.4474773]).appendPoint([266.1441086,-203.0015443]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.6239615,-160.3686394],[179.5196077,-158.6624686]]).appendPoint([177.8134369,-144.7668224]).appendPoint([163.9177907,-146.4729932]).appendPoint([165.6239615,-160.3686394]).close().innerToCAG()
).union(
    new CSG.Path2D([[167.939479,-179.2270162],[181.8351252,-177.5208454]]).appendPoint([180.1289544,-163.6251992]).appendPoint([166.2333082,-165.33137]).appendPoint([167.939479,-179.2270162]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.308444,-141.5102625],[177.2040902,-139.8040917]]).appendPoint([175.4979194,-125.9084455]).appendPoint([161.6022732,-127.6146163]).appendPoint([163.308444,-141.5102625]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.9929266,-122.6518857],[174.8885728,-120.9457149]]).appendPoint([173.182402,-107.0500687]).appendPoint([159.2867558,-108.7562395]).appendPoint([160.9929266,-122.6518857]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.5] });
}




                function faceplate_case_fn() {
                    

                // creating part 0 of case faceplate
                let faceplate__part_0 = faceplate_panel_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let faceplate__part_0_bounds = faceplate__part_0.getBounds();
                let faceplate__part_0_x = faceplate__part_0_bounds[0].x + (faceplate__part_0_bounds[1].x - faceplate__part_0_bounds[0].x) / 2
                let faceplate__part_0_y = faceplate__part_0_bounds[0].y + (faceplate__part_0_bounds[1].y - faceplate__part_0_bounds[0].y) / 2
                faceplate__part_0 = translate([-faceplate__part_0_x, -faceplate__part_0_y, 0], faceplate__part_0);
                faceplate__part_0 = rotate([0,0,0], faceplate__part_0);
                faceplate__part_0 = translate([faceplate__part_0_x, faceplate__part_0_y, 0], faceplate__part_0);

                faceplate__part_0 = translate([0,0,0], faceplate__part_0);
                let result = faceplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return faceplate_case_fn();
            }

        