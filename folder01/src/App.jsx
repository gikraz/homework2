

import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {
  

  return (
    <div>
    <Header />
    <Card 
    name={"uran"} 
    raodenoba={"1"} 
    color={"wittel lurji"} 
    fasi={"24,7/f-89,30/f"} 
    info={"ურანი 235 შედგება 143 ნეიტრონისგან და 82 პროტონისგან რომ დაამატო ერტი ნიეტრონი ურანი ვერ ჩაიტევს მაგხელა ენერგიას და გაიღოპა ბევრ ნაწილად ად გამოყობს კიდე ნეიტრონებს რომლებიც კიდე შყავს ურანი კოქმედებაში და ხდება ჟაჟვის რეაქცია"}
    bg={"blue"}
    />
    <Card 
    name={"FC25"} 
    raodenoba={"1"} 
    color={"blue"} 
    fasi={"300"} 
    info={"football game for ps5"} 
    bg={'green'}
    />
    <Card 
    name={"white rose"} 
    raodenoba={"15"} 
    color={"white"} 
    fasi={"64.94"} 
    info={"თეთრი ვარდები ყველაზე ძვირიანი ვარდი"}

    />
    <Card 
    name={"F-22 Raptor"}
     raodenoba={"1"}
      color={"grey"}
       fasi={"146,2Minion"}
        info={"შექმნილია ამირიკის შეერთებული სტატების სამხედრო სახაერო ძალებით წარმოადგენს უჩინარ თვითფრინავს რომელიც არ ჩანს რადარებზე და არც ცაში ისეა შეღებილი არა ოფიციალური ამბებით ამერიკელმა ინჟინერმა რომელიც იყო რუსეთში ნახა წიგნი სადაც ეწერა რომ შეიძლებოდა შქმილიყო(самолот невидимка) ჩინარი თვიფრინავი "}
        bg={'gray'}
         />
         <Button />
    </div>

  )
}

export default App
