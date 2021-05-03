<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2022.44">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 23.0px; font: 15.0px Menlo; color: #900112; -webkit-text-stroke: #900112}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 23.0px; font: 15.0px Menlo; color: #000000; -webkit-text-stroke: #000000; min-height: 18.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 23.0px; font: 15.0px Menlo; color: #000000; -webkit-text-stroke: #000000}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 23.0px; font: 15.0px Menlo; color: #166b29; -webkit-text-stroke: #166b29}
    span.s1 {font-kerning: none; background-color: #fffffe}
    span.s2 {font-kerning: none; color: #000000; background-color: #fffffe; -webkit-text-stroke: 0px #000000}
    span.s3 {font-kerning: none}
    span.s4 {font-kerning: none; color: #900112; background-color: #fffffe; -webkit-text-stroke: 0px #900112}
    span.s5 {font-kerning: none; color: #0000ff; background-color: #fffffe; -webkit-text-stroke: 0px #0000ff}
    span.s6 {font-kerning: none; color: #166b29; background-color: #fffffe; -webkit-text-stroke: 0px #166b29}
    span.s7 {font-kerning: none; color: #0b4d47; background-color: #fffffe; -webkit-text-stroke: 0px #0b4d47}
  </style>
</head>
<body>
<p class="p1"><span class="s1">'use strict'</span><span class="s2">;</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p3"><span class="s1">process.stdin.resume();</span></p>
<p class="p3"><span class="s1">process.stdin.setEncoding(</span><span class="s4">'utf-8'</span><span class="s1">);</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p3"><span class="s5">let</span><span class="s1"> inputString = </span><span class="s4">''</span><span class="s1">;</span></p>
<p class="p3"><span class="s5">let</span><span class="s1"> currentLine = </span><span class="s6">0</span><span class="s1">;</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p3"><span class="s1">process.stdin.on(</span><span class="s4">'data'</span><span class="s1">, inputStdin =&gt; {</span></p>
<p class="p3"><span class="s1">    inputString += inputStdin;</span></p>
<p class="p3"><span class="s1">});</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p3"><span class="s1">process.stdin.on(</span><span class="s4">'end'</span><span class="s1">, _ =&gt; {</span></p>
<p class="p3"><span class="s1">    inputString = inputString.trim().split(</span><span class="s4">'\n'</span><span class="s1">).map(string =&gt; {</span></p>
<p class="p3"><span class="s1">        </span><span class="s5">return</span><span class="s1"> string.trim();</span></p>
<p class="p3"><span class="s1">    });</span></p>
<p class="p3"><span class="s1">    </span></p>
<p class="p3"><span class="s1">    main();    </span></p>
<p class="p3"><span class="s1">});</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p3"><span class="s5">function</span><span class="s1"> readLine() {</span></p>
<p class="p3"><span class="s1">    </span><span class="s5">return</span><span class="s1"> inputString[currentLine++];</span></p>
<p class="p3"><span class="s1">}</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p4"><span class="s1">/**</span></p>
<p class="p4"><span class="s1">*   Return the second largest number in the array.</span></p>
<p class="p4"><span class="s1">*   @param {Number[]} nums - An array of numbers.</span></p>
<p class="p4"><span class="s1">*   @return {Number} The second largest number in the array.</span></p>
<p class="p4"><span class="s1">**/</span></p>
<p class="p3"><span class="s5">function</span><span class="s1"> getSecondLargest(nums) {</span></p>
<p class="p3"><span class="s1">    nums.sort((a,b) =&gt; a-b);</span></p>
<p class="p3"><span class="s1">    </span><span class="s5">const</span><span class="s1"> newArray = </span><span class="s7">Array</span><span class="s1">.</span><span class="s5">from</span><span class="s1">(</span><span class="s5">new</span><span class="s1"> </span><span class="s7">Set</span><span class="s1">(nums));</span></p>
<p class="p3"><span class="s1">    </span><span class="s5">return</span><span class="s1"> newArray[newArray.length-</span><span class="s6">2</span><span class="s1">];</span></p>
<p class="p3"><span class="s1">}</span></p>
<p class="p2"><span class="s3"></span><br></p>
<p class="p2"><span class="s3"></span><br></p>
</body>
</html>
