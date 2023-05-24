---
layout: post
title: Internationalization in ##Platform_Name## Treemap control | Syncfusion
description: Learn here all about Internationalization in Syncfusion ##Platform_Name## Treemap control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Internationalization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Internationalization in ##Platform_Name## Treemap control

The TreeMap control supports internationalization for the following elements:

* Data label
* Tooltip

For more information about number and date formatter, refer to [`internationalization`](http://ej2.syncfusion.com/documentation/base/intl.html).

## Globalization

Globalization is the process of designing and developing a component that works in different cultures/locales. Internationalization library is used to globalize number, date, and time values in the TreeMap control using the `format` property in the TreeMap.

**Numeric format**

In the following code example, tooltip is globalized to Deutsch culture.

```ts

import { TreeMap, TreeMapTooltip } from '@syncfusion/ej2-treemap';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { loadCldr, Ajax, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
TreeMap.Inject(TreeMapTooltip);
loadCultureFiles("de");
setCulture("de");
setCurrencyCode('EUR');
let treemap: TreeMap = new TreeMap({
    locale: "de",
    format: "c" ,
 dataSource: [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
],
tooltipSettings: {
            visible: true,
    },
   weightValuePath: 'GDP'
}, '#container');
function loadCultureFiles(name: string) {
    var files = ['currencies.json', 'numbers.json'];
    var loadCulture = function (prop: number) {
        let val:  any, ajax: Ajax;
        // ajax = new Ajax('http://ej2.syncfusion.com/javascript/demos/' + 'src/common/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
        ajax = new Ajax('/node_modules/cldr-data/main/' + name + '/' + files[prop], 'GET', false);
        ajax.onSuccess = function (value: any) {
            val = value;
        };
        ajax.send();
        loadCldr(JSON.parse(val));
    };
    for (var prop = 0; prop < files.length; prop++) {
        loadCulture(prop);
    }
}

```

## Right-to-left rendering

The TreeMap control supports right-to-left rendering for all its elements such as nodes, tooltip, data labels, and legends.

## Legend with Rtl support

If set the `enableRtl` property to **true**, then the legend icon will be rendered on the right and the legend text will be rendered on the left of the legend icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs1" %}
{% endif %}

## Tooltip with Rtl support

If the `enableRtl` property is set to **true**, the tooltip data will be rendered in reverse direction.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs2" %}
{% endif %}

## Treemap Item Rendering Direction

The direction of TreeMap item is `TopLeftBottomRight` by default and customize the rendering direction of the TreeMap item by setting the `renderDirection` property.

The TreeMap can be rendered in the following directions:

* TopLeftBottomRight
* TopRightBottomLeft
* BottomRightTopLeft
* BottomLeftTopRight

The following example demonstrate, how to render the treemap in the RTL direction with `TopLeftBottomRight`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs3" %}
{% endif %}

The following example demonstrate, how to render the treemap in the RTL direction with `TopRightBottomLeft`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs4" %}
{% endif %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomRightTopLeft`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs5" %}
{% endif %}

The following example demonstrate, how to render the treemap in the RTL direction with `BottomLeftTopRight`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs6" %}
{% endif %}

## Right-to-left rendering

The TreeMap control supports right-to-left rendering for all its elements such as nodes, tooltip, data labels, and legends.

## Legend with Rtl support

If you set the `enableRtl` property to true, then the legend icon will be rendered on the right and the legend text will be rendered on the left of the legend icon.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs7" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs7" %}
{% endif %}

## Tooltip with Rtl support

If the `enableRtl` property is set to true, the tooltip data will be rendered in reverse direction.

The following example shows the format of the tooltip.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs8" %}
{% endif %}

## Treemap Item Rendering Direction

By default, the direction of tree map item is `TopLeftBottomRight`. You can customize the rendering direction of the tree map item by setting the `renderDirection` property.
The TreeMap can be rendered in the following four different directions.
      `TopLeftBottomRight`
      `TopRightBottomLeft`
      `BottomRightTopLeft`
      `BottomLeftTopRight`

The following example demonstrate how to render the treemap in the RTL direction with `TopLeftBottomRight`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs9" %}
{% endif %}

The following example demonstrate how to render the treemap in the RTL direction with `TopRightBottomLeft`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs10" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs10/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs10" %}
{% endif %}

The following example demonstrate how to render the treemap in the RTL direction with `BottomRightTopLeft`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs11" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs11/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs11" %}
{% endif %}

The following example demonstrate how to render the treemap in the RTL direction with `BottomLeftTopRight`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/treemap/internationalization-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs12" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/treemap/internationalization-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/treemap/internationalization-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/treemap/internationalization-cs12" %}
{% endif %}