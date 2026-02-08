---
title: Home
client_logos:
  - name: "Customer 1"
    logo: "/images/logos/customer-1.png"
  - name: "Customer 2"
    logo: "/images/logos/customer-2.png"
  - name: "Customer 3"
    logo: "/images/logos/customer-3.png"
  - name: "Customer 4"
    logo: "/images/logos/customer-4.png"
  - name: "Customer 5"
    logo: "/images/logos/customer-5.png"
---

{{< hero 
    headline="Protect What Matters Most"
    sub_headline="Your digital life is your real life. We secure your legacy, your data, and your identity."
    hero_image="/images/landing.webp"
    gradient-from="#6ee7b7"
    gradient-to="#3b82f6"
    gradient-angle="180"
>}}

<section class="section bg-gray-50 py-20">
    <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Help</h2>
            <p class="text-xl text-gray-600">Technology is complicated. We make it simple and safe for everyone.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Families</h3>
                <p class="text-gray-600">Protect your precious photos, secure your kids' devices, and ensure your digital legacy is safe.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Solopreneurs</h3>
                <p class="text-gray-600">You are your own IT department. Let us handle the backups and security so you can focus on work.</p>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Small Businesses</h3>
                <p class="text-gray-600">Enterprise-grade protection without the enterprise price tag. Compliance, security, and support.</p>
            </div>
        </div>
    </div>
</section>

{{< features-section 
    title="Our Core Missions"
    description="We focus on the three pillars of digital safety."
>}}

{{< feature
    title="Digital Estate Planning"
    description="Ensure your family can access your digital life if something happens to you. Don't leave them locked out of bank accounts, photos, and email."
    badge="Legacy Protection"
    badgeColor="#6366f1"
    image="/images/web-presence.webp" 
    buttonText="Plan Your Legacy"
    buttonLink="/services/digital-estate/"
    features="Digital Asset Inventory,Legacy Contact Setup,Access Planning,Critical Document Digitization"
    imagePosition="right"
>}}

{{< feature
    title="Online Security Operations"
    description="Stop using passwords. We move you to un-phishable hardware keys (YubiKey) and biometrics, making your accounts virtually unhackable."
    badge="Online Security"
    badgeColor="#0284c7"
    image="/images/password-manager.png"
    buttonText="Secure Your Identity"
    buttonLink="/services/online-security/"
    features="Hardware Key Setup,Passkey Implementation,2FA Auditing,Emergency Access Protocol"
    imagePosition="left"
>}}

{{< feature
    title="Data Backup & Recovery"
    description="Ransomware protection and accidental deletion insurance. We keep your memories and documents safe from hard drive failure and viruses."
    badge="Data Recovery"
    badgeColor="#f97316"
    image="/images/backup-service.webp"
    buttonText="Protect Your Data"
    buttonLink="/services/backup/"
    features="Automated System Backups,Ransomware Rescue,Full System Restore,Secure Offsite Storage"
    imagePosition="right"
>}}

{{< /features-section >}}
