# Next Landing

This is a landing page project built with Next.js, designed to provide small
businesses with a clean and professional online presence. The landing page is
easily customizable and can be configured using YAML files, making it simple to
update and maintain.

Next.js is a powerful framework that offers many advantages, including easy
setup, optimized performance, built-in SEO support, and high customizability
and extensibility. Additionally, the landing page uses static site generation,
resulting in faster load times, improved SEO, and reduced server load.

We believe this landing page project will be a valuable asset for small
businesses seeking to establish an online presence.

![Next Landing Hero
Screenshot](https://github.com/writeonlycode/next-landing/raw/main/src/screenshots/next-landing-desktop-navbar-hero.png)


## Project Setup

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Configure the title and metatags of the website using the
   `/config/config.yaml` file.
4. Configure the menu with the `/config/menu.yaml` file.
5. Configure the content of the sections of the landing page by editing the
   YAML files inside the `/data` directory.


## Running Locally

To run the development version of the landing page locally, use the following
command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000/`.

To run the production version of the landing page locally, use the following
commands:

```bash
npm run build
npm run start
```

This will build the production version of the landing page and start the server
at `http://localhost:3000/`.


## Deploying to Vercel

To deploy the landing page to Vercel, follow these steps:

1. Create an account on Vercel.
2. Install the Vercel CLI by running `npm install -g vercel`.
3. Run `vercel login` and follow the prompts to authenticate your account.
4. Run `vercel` to deploy the project to Vercel.
5. Follow the prompts to configure your deployment settings.

Once the deployment is complete, your landing page will be live at the URL
provided by Vercel.

Thank you for choosing this landing page project!
