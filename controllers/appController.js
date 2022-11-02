export const homeController = (req, res) => res.render('index', {name: 'Alexis'});

export const contactController = (req, res) => res.render('contact');

export const aboutController = (req, res) => res.render('about');