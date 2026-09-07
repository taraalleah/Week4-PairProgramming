module.exports = (req, res, next) => {
    const isAdmin = req.query.admin === "true";
    console.log(req.query.admin);

    if (!isAdmin) {
        return res.status(403).json({ message: "Admin access required" });
    }
    next();
};
