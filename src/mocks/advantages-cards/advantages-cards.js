import eat from "../../assets/eat.svg";
import garbage from "../../assets/garbage.svg";
import natural from "../../assets/natural.svg";
import meat from "../../assets/meat.svg";

const AdvantagesCards = [
    {
        id: 1,
        img: eat,
        status: "good",
        option: "Фермерские продукты",
        title: "Еда намного вкуснее",
        text: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники"
    },
    {
        id: 2,
        img: garbage,
        status: "bad",
        option: "Магазинные продукты",
        title: "Просроченные продукты",
        text: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара"
    },
    {
        id: 3,
        img: natural,
        status: "good",
        option: "Фермерские продукты",
        title: "Натуральные продукты",
        text: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."
    },
    {
        id: 4,
        img: meat,
        status: "bad",
        option: "Магазинные продукты",
        title: "Некачественное мясо",
        text: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов"
    }
]

export default AdvantagesCards;