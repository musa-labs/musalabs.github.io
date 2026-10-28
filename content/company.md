---
title: "About Us"
layout: "company"
description: "We combine Flow Engineering and practical AI automation to bring clarity, speed, and enterprise reliability to growing businesses."
---

{{< section-container class="bg-gradient-to-b from-blue-50 via-blue-50 to-white pt-20 pb-24" >}}
    <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">We Turn Tangled Operations Into Clear, Effortless Flow</h1>
        <p class="text-xl text-gray-600 mb-16">Every growing business eventually hits a wall where work feels harder than it should—buried in email threads, manual spreadsheets, and disconnected software.</p>
        <div class="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 class="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p class="text-xl text-gray-600">
                Musa Labs combines <strong>Flow Engineering</strong> with modern <strong>AI Automation</strong>. First, we help you see and simplify how work moves through your business. Then, we build reliable background systems that handle the busywork—so your team can do their best work without friction.
            </p>
        </div>
    </div>
{{< /section-container >}}

{{< section-container class="py-16 bg-white border-t border-b border-gray-100" >}}
    <div class="max-w-4xl mx-auto">
        <div class="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div class="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-700 flex items-center justify-center text-white text-3xl font-extrabold flex-shrink-0 shadow-md">
                    LM
                </div>
                <div>
                    <div class="text-sm font-bold uppercase tracking-wider text-primary-700 mb-1">Meet the Founder</div>
                    <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Luke Milby</h2>
                    <p class="text-sm font-semibold text-gray-500 mb-4">Founder &amp; Flow Engineer • Senior Security Engineer</p>
                    <p class="text-gray-600 leading-relaxed mb-4">
                        With over a decade of experience developing software and building mission-critical data pipelines and process automations for Security Operations Centers at <strong>Truist</strong>, Luke founded Musa Labs to bring enterprise-grade reliability to small and mid-sized businesses.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        In security operations, a dropped event or a brittle script isn't an annoyance—it's a liability. Musa Labs applies that same discipline to your everyday business workflows: untangling messy processes first, keeping your data locked down, and building serverless automations on Cloudflare that never drop the ball.
                    </p>
                    <div class="flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-700">
                        <a href="https://www.linkedin.com/in/luke-milby/" target="_blank" rel="noopener noreferrer" class="text-primary-700 hover:text-primary-800 underline">Connect on LinkedIn →</a>
                        <span>• 10+ Years Software Development</span>
                        <span>• Enterprise SOC Automation &amp; Pipelines</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
{{< /section-container >}}

{{< section-container class="py-20 bg-gray-50" >}}
<div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-12">Our Core Values</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {{< value-card 
            title="Clarity Before Code"
            icon="book-open"
            description="We never automate a mess. Through Flow Engineering, we simplify the process first so every step has a clear purpose and owner."
        >}}
        {{< value-card 
            title="Simplicity for Your Team"
            icon="heart"
            description="Powerful under the hood, effortless on the surface. Your team shouldn't have to learn a complicated new dashboard—our systems meet them right inside Slack, email, and your CRM."
        >}}
        {{< value-card 
            title="Bank-Grade Reliability"
            icon="shield-check"
            description="Engineered with the same discipline used in enterprise security operations—built on Cloudflare serverless infrastructure so your data stays private and your workflows never drop a task."
        >}}
    </div>
</div>
{{< /section-container >}}

{{ partial "components/cta.html" . }}
