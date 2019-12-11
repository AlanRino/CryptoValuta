$(document).ready(function () {


   

    function getData() {
        $.ajax({
            url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,USDT,LTC,EOS,BNB,BSV,TRX&tsyms=USD,EUR", success: function (result) {
                console.log(result)

                let coins = ["BTC", "ETH", "XRP", "BCH", "USDT", "LTC", "EOS", "BNB", "BSV", "TRX"];

                for (i = 0; i < coins.length; i++) {

                    let price = result.DISPLAY[coins[i]].EUR.PRICE;
                    let market = result.DISPLAY[coins[i]].EUR.MKTCAP;
                    let change = result.DISPLAY[coins[i]].EUR.CHANGEPCT24HOUR;

                    $('.row').append(
                        ` <div class="col-md-6 col-lg-4 col-xl-3">
                        <!-- ik heb een div gemaakt met card, en daarin maak ik me layout van elke cryptomunt -->
                        <div class="card coin-price">
                            <!-- in de coin header richt ik met behulp van bootstrap en css, de logo en titel. Dit stop ik in de header van elke card  -->
                            <div class="coin-header">
                                <img src="images/`+ coins[i] +`.png" width="23px">
                                <h3 class="coin-name position-relative h5">`+ coins[i] +`</h3>
                            </div>
                            <!-- in deze div positioneer ik de informatie van elke cryptomunt onder elke header in elke card -->
                            <div class="card-description">Cryptogeld wordt geregistreerd in een blockchain. Soms is er een
                                aparte blockchain voor één cryptovaluta, in andere gevallen registreert één blockchain meerdere
                                valuta en/of ook andere data. Een bedrag van een bepaald aantal maal de munteenheid is een
                                output van een transactie die gebruikt is of kan worden als input van een latere transactie
                            </div>
                            <!-- in deze div staat de prijs van de cryptomunt onder de iformatie -->
                            <div class="coin-data">
                                <ul>
                                    <li class="coin-stat1">
                                        <span>Huidige Waarde:</span>
                                        <strong id="valueCoin">`+ price +`</strong>
                                    </li>
                                    <li class="coin-sta2t">
                                        <span>Waarde 24 uur:</span>
                                        <strong id="valueMarket">`+ market +`</strong>
                                    </li>
                                    <li class="coin-stat3">
                                        <span>Marktkapitalisatie:</span>
                                        <strong id="`+ ((change < 0) ? "valueChangeMin" : "valueChangePlus") +`">`+ change +`</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        `
                    );

                }
            }
        });

    }
    getData();
});
