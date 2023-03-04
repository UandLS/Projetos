function outcome(){

    let valor = Number(document.getElementById("vprod").value)


    let IPI = (valor*0.25)
    let COFINS = (valor + IPI)*0.03
    let PIS = (valor+IPI+COFINS)*0.0165
    let ICMS = (valor+IPI+COFINS+PIS)*0.15
    let vIMP = IPI + COFINS + PIS + ICMS
    let vFINAL = valor + vIMP
    
    document.getElementById("vICMS").value = ICMS
    document.getElementById("vIPI").value = IPI
    document.getElementById("vPIS").value = PIS
    document.getElementById("vCOFINS").value = COFINS
    document.getElementById("vIMP").value = vIMP
    document.getElementById("vFINAL").value = vFINAL
}