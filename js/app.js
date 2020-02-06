(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    //Create new customer using the constructor function

    function createCustomer(img, name, text) {

        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    
    createCustomer(0, 'Milling machine projects', 'The main point of work was the design of the milling machine type bridge. An important aspect was also the selection of a specific construction solution, machine frame, feed motion motors and spindle, as well as slideway and transmission assemblies. The FEM strength analysis was performed on the finished CAD model using the Autodesk Inventor program. During verification of the obtained results, the focus was mainly on the stress occurring in the entire milling machine, as well as on the maximum displacements of the tool. Technical documentation of this construction solution of the milling machine type bridge was also developed.')
    createCustomer(1, 'Machine shaft', 'Machine shaft project and design with gear wheels and reducer covers.')
    createCustomer(2, 'Flange coupling', 'Project and design flange coupling.')
    createCustomer(3, 'Wine glasses and packaging design', 'Making a multimedia presentation.')
    createCustomer(4, 'Shaker design', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    createCustomer(5, 'Milling machine FEM strength analysis', 'The FEM strength analysis was performed on the finished CAD model using the Autodesk Inventor program. During verification of the obtained results, the focus was mainly on the stress occurring in the entire milling machine, as well as on the maximum displacements of the tool.')
    

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
               if(index === 0){
                    index = customers.length
               }
               index--
               customerImage.src = customers[index].img
               customerName.textContent = customers[index].name
               customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                     index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
             }
        })
    })
    
})()