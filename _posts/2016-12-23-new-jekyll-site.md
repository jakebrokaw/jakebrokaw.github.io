---
layout: post
title: Creating a new website with GitHub Pages and Jekyll
---

I had been wanting to redo my website for a while now. I also wanted to start writing more in the coming year, so I knew I needed a way to create, edit, and publish blog posts easily. There's no shortage of resources and platforms to get a personal blog/website up quickly, but I have never really liked the well-known blogging Content Management Systems (WordPress, Tumblr, Ghost, etc.). So I decided to try something I hadn't used before --- I wanted to learn something new. Enter <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> and <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>.

There's a few options on how to get started, but the _easiest_ starting point, in my opinion, is <a href="https://github.com/barryclark/jekyll-now" target="_blank">Jekyll Now</a> from Barry Clark.

<br>
### Getting started with Jekyll Now:

You can follow the step by step instructions via the link above, but essentially you'll want to make sure you're logged in to your GitHub account, then fork the Jekyll Now repository. When it's finished, rename your new repo in the Settings tab to _username.github.io_ (where "username" is your GitHub username). Now type _username.github.io_ into your browser and you'll see the default Jekyll Now template! Super easy.

From here, you can edit files via GitHub if you're into that. Or, if you're like me, you can edit your files locally in your editor of choice (I prefer <a href="https://atom.io/" target="_blank">Atom</a>).

<br>
### For local development:

To edit the files locally, create a folder on your desktop (or wherever you want your local files to be stored). Then, open your terminal and navigate to that folder you just created. Next, install the 'github-pages' gem:


{% highlight ruby %}
$ sudo gem install github-pages
{% endhighlight %}

Now, just clone your repo:


{% highlight ruby %}
$ git clone https://github.com/username/username.github.io.git
{% endhighlight %}

Once it's finished cloning, serve up a local version of your site and watch for changes:

{% highlight ruby %}
$ jekyll serve
{% endhighlight %}

Now you should be able to view a local version of your site here: <a href="http://127.0.0.1:4000/" target="_blank">http://127.0.0.1:4000/</a>. You can now edit your site locally and see the changes on your local server. Whenever you're ready to commit your changes, just follow normal Git protocol. Add your changes, commit them, and then push them up to your repository via:

{% highlight ruby %}
$ git push -u origin master
{% endhighlight %}

You should then see your changes when you refresh your _username.github.io_ page in the browser.

<br>
### Pointing an existing domain to your GitHub Pages site:

This part was a little tricky for me as most posts about this are specific to domain providers. And this post will be no different. My domain is parked at <a href="hover.com" target="_blank">Hover.com</a>, so the rest of this post will be specific to Hover.

Make sure you <a href="https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/" target="_target">add a custom domain name</a> to your GitHub Pages site. You'll also want to add your domain to the CNAME file in the root directory of your site. For example, this is the only line of code in my CNAME file:

{% highlight ruby %}
www.jacobrokaw.com
{% endhighlight %}

Save that file and commit your changes/push up to your master.

Next, log in to your Hover account. Click on the domain you want to be attached to your new GitHub Pages site. In the "Domain Details" tab, make sure the Nameservers are set to Hover's nameservers:

{% highlight ruby %}
ns1.hover.com | ns2.hover.com
{% endhighlight %}

Now, go to the "DNS" tab. You'll want to remove any old records that may have been pointing to a different provider. Next, add two "A" record types with the Hostname "@" and IP Addresses of "192.30.252.153" and "192.30.252.154" which points to GitHub.

Next, you'll want to add two "CNAME" records, one with a Hostname of "www" and one with a Hostname of "*" --- the Target Host for both should be "username.github.io" to point to your repository.

And that should do it! Keep in mind, when moving an existing domain name to a different host, it can take a few hours (even upwards of a full day) to see your domain pointing to your new site.

<br>
### Other Helpful links

Smashing Magazine: [Build A Blog With Jekyll And GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
<br>
Michael Deeb: [Using a Custom Domain with GitHub Pages](http://michaeljdeeb.com/blog/using-a-custom-domain-with-github-pages/)
<br>
GitHub Help: [Troubleshooting custom domains](https://help.github.com/articles/troubleshooting-custom-domains/)
