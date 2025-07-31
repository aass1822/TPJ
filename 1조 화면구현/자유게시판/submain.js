 const toggle = document.querySelectorAll(".comment-tog");
        toggle.forEach((tog, tog1) =>
            tog.addEventListener("click", function () {
                const cont = tog.nextElementSibling;
                const cont2 = tog.firstElementChild;

                cont.classList.toggle("show");
                // console.log(cont.classList.value); // comment show / comment
                // console.log(value1 =='comment'); // flase / true
                const value1 = cont.classList.value;
                if ((value1 == 'comment') == false) {
                    //comment show
                    tog.style.backgroundColor = "#4174b9";
                    cont2.setAttribute("style", " padding: 0;width:100%; height: 100%; color:white;");

                    if (cont.classList.contains("show")) {
                        const cont3 = document.querySelectorAll(".comment")
                        cont3.forEach(c => {
                            if (c !== cont) {
                                c.classList.remove("show");

                                const othertog = c.previousElementSibling;
                                if (othertog) {
                                    othertog.style.backgroundColor = "white";
                                    if (othertog.firstElementChild) {
                                        othertog.firstElementChild.setAttribute("style", "padding: 0; width:100%; height: 100%; color:black;"
                                        );
                                    }
                                }
                            }
                        });
                    }

                }
                else {
                    //comment 
                    tog.style.backgroundColor = "white";
                    cont2.setAttribute("style", " padding: 0;width:100%; height: 100%; color:black;");
                }

            })
        );
