---
layout: post
title: Creating a new website with GitHub Pages and Jekyll
---

My previous site was pretty lame. It was just a static HTML page providing a quick bio and links to my social profiles. It was in definite need of some new paint. There's plenty of resources out there to get a personal site up quickly, but I wanted to try something I hadn't used before - I wanted to learn something new. Enter <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> and <a href="https://pages.github.com/" target="_blank">Jekyll</a>.

I was looking into a few options on how to get started, but the _easiest_ by far is using <a href="https://github.com/barryclark/jekyll-now" target="_blank">Jekyll Now</a>.

### Getting started with Jekyll Now:

You can follow the step by step instructions on that page, but essentially you just fork that repository, and update the repository name in your settings once it's finished. Rename your new repo _username.github.io_ (where "username" is your GitHub username). Now type _username.github.io_ into your browser and you'll see the default Jekyll Now template! Super easy.

From here, you can edit files via GitHub if you're into that. I prefer to edit files locally in my <a href="https://atom.io/" target="_blank">Atom editor</a>.

### For local development:

To edit the files locally, create a folder on your desktop (or wherever you want your local files to be stored). Then, open your terminal and navigate to that folder you just created. I tried a couple different gem installs trying to get Jekyll and GitHub Pages to work properly, but this was the smoothest option for me:


{% highlight ruby %}
$ sudo gem install github-pages
{% endhighlight %}

Now, just clone your repo:


{% highlight ruby %}
$ git clone https://github.com/username/username.github.io.git
{% endhighlight %}

Once it's finished cloning, serve up your site and watch for changes by typing the following into terminal:

{% highlight ruby %}
$ jekyll serve
{% endhighlight %}

Now you should be able to view a local version of your site here: http://127.0.0.1:4000/. Now you should be able to edit your site locally and see the changes on your local server. Whenever you're ready to commit your changes, just follow normal Git protocol. Add your changes, commit them, and then push them up to your repository via:

{% highlight ruby %}
$ git push -u origin master
{% endhighlight %}

You should then see your changes when you refresh your _username.github.io_ page in the browser.

### Moving an existing domain name:

This part was a little tricky for me as most posts about this are specific to domain providers. And this post will be no different. My domain is parked at <a href="hover.com" target="_blank">Hover.com</a>, so the rest of this post will be specific to Hover.

Make sure you <a href="https://help.github.com/articles/adding-or-removing-a-custom-domain-for-your-github-pages-site/" target="_target">add a custom domain name</a> to your GitHub Pages site. You'll also want to add your domain to the CNAME file in the root directory of your site. Don't add anything before the domain name or anything else to the file. For example, this is the only line of code in my CNAME file:

{% highlight ruby %}
www.jacobrokaw.com
{% endhighlight %}

Save that file and commit your changes/push up to your master.

Next, log in to your Hover account. Click on the domain you want to be attached to your new GitHub Pages site. In the "Domain Details" tab, make sure the Nameservers are set to Hover's domainservers:

{% highlight ruby %}
ns1.hover.com | ns2.hover.com
{% endhighlight %}

Now, go to the "DNS" tab. You'll want to remove any old records that may have been pointing to a different provider. Next, add two "A" record types with the Hostname "@" and IP Addresses of "192.30.252.153" and "192.30.252.154" which points to GitHub.

Next, you'll want to add two "CNAME" records, one with a Hostname of "www" and one with a Hostname of "*" --- for both, the Target Host should be "username.github.io" to point to your repository.

And that should do it! Keep in mind, when moving an existing domain name to a different host, it can take a few hours (even upwards of a full day) to see your domain pointing to your new site.

### Other Helpful links

Smashing Magazine: [Build A Blog With Jekyll And GitHub Pages](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)
<br>
Michael Deeb: [Using a Custom Domain with GitHub Pages](http://michaeljdeeb.com/blog/using-a-custom-domain-with-github-pages/)
<br>
GitHub Help: [Troubleshooting custom domains](https://help.github.com/articles/troubleshooting-custom-domains/)
