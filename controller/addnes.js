const 

exports.postNewsPortal = (req, res, next) => {


    // newsmodel.create({
    //     ...req.body
    // }).then(abc => {
    //     console.log("new crate")
    // })

    const { image } = req.files
    const uploadpath = path.resolve(__dirname, '..', 'public/images/news', image.name)
    image.mv(uploadpath, (error) => {
        newsmodel.create({
            ...req.body,
            image: `/news/${image.name}`,
        }).then(abc => {
            newsmodel.find({})
            .then(newsdata => {
                res.render("/")
            })
        }).catch(ac=> {
            console.log("not create")
        })

    })
}