module.exports = {
    async submit(ctx) {
        const { name, company, email, phone, message } = ctx.request.body;

        try {
            // Example: Save to Strapi or send an email
            await strapi.query('api::contact-us.contact-us').create({
                data: { name, company, email, phone, message },
            });

            return ctx.send({ message: 'Form submitted successfully' }, 200);
        } catch (error) {
            console.error(error);
            return ctx.badRequest('Form submission failed');
        }
    },
};
