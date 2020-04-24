let loadimages = {
    selector: function (selector) {

        window.addEventListener("scroll", function (e) {
            let documentTop = this.pageYOffset;
            let tercoTela = window.innerHeight / 3;

            let $arr = document.querySelectorAll(selector);

            if ($arr.length > 0) {
                $arr.forEach(function (e, d) {
                    let offsetTopItem = e.offsetTop;
                    let img = e.getAttribute('data-src') ? e.getAttribute('data-src') : null;
                    let nameElement = e.tagName;


                    if (img) {
                        if (documentTop > offsetTopItem - tercoTela) {
                            if (nameElement === "IMG") {
                                e.setAttribute('src', img);
                            } else if (nameElement === "DIV") {
                                e.style.backgroundImage = 'url(' + img + ')';
                            }
                        }
                    }

                    if (nameElement === "PICTURE") {
                        const elements = e.children;
                        const countElements = e.childElementCount;

                        if (documentTop > offsetTopItem - tercoTela) {
                            for (let i = 0; i < countElements; i++) {
                                let item = elements[i];
                                let itemname = item.tagName;
                                let img = item.getAttribute('data-src') ? item.getAttribute('data-src') : null;

                                if (img) {
                                    if (itemname === "SOURCE") {
                                        item.setAttribute("srcset", img);
                                    } else if (itemname === "IMG") {
                                        item.setAttribute("src", img);
                                    }
                                }


                            }
                        }

                    }

                })
            }

        })

    }
}
