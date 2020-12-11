                      
                     function verificaData() {

                        //pega botão do submit e paragrafos de alerta                        
                        var submit = document.getElementById('emprestimo');
                        var alerta = document.getElementById('alerta');


                        //traz a data atual, com mês atual, para a variavel dataAtual (formato AAAA-MM-DD)
                        var data = new Date;
                        d1 = data.getUTCMonth();
                        d2 = "1";
                        d3 = parseInt(d1) + parseInt(d2);
                        dataAtual = data.getFullYear() + "-" + d3 + "-" + data.getDate();
                        console.log(dataAtual);


                        //pega a data dos input-date
                        var dataInit = document.getElementById('inicio');
                        var dataFm = document.getElementById('fim');


                        //retira "-" das datas
                        var dataIni = dataInit.value;
                        dataIni = dataIni.replace(/-/g, "");

                        var dataF = dataFm.value;
                        dataF = dataF.replace(/-/g, "");

                        var dataAt = dataAtual.replace(/-/g, "");


                        //condições de decisão das datas 
                        if (parseInt(dataIni) < parseInt(dataAt)) {

                            submit.setAttribute("disabled", "true");
                            alerta.removeAttribute("hidden");
                            dataFm.setAttribute("disabled", "true");

                        } else if (parseInt(dataF) < parseInt(dataAt)) {
                            
                            submit.setAttribute("disabled", "true");
                            alerta.removeAttribute("hidden");
                            dataFm.removeAttribute("disabled", "true");

                        } else if (parseInt(dataF) < parseInt(dataIni)) {

                            submit.setAttribute("disabled", "true");
                            alerta.removeAttribute("hidden");

                        } else {

                          dataFm.removeAttribute("disabled", "true");

                          alerta.setAttribute("hidden", "true");                          

                          submit.removeAttribute("disabled");

                        } 
                                           
                     }  
