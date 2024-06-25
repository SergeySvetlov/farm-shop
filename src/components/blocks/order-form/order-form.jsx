import React, {useState} from "react";
import Title from "../../ui/title/title.jsx";
import CheckboxList from "../../ui/checkbox-list/checkbox-list.jsx";
import { FormSection, StyledForm, StyledFieldset, StyledCheckbox, AdressInput, PriceLabel, PriceValue, SubmitButton } from "./styled.js";

export default function OrderForm ({products, swiperRef}) {
    const [selectProductIds, setSelectProductIds] = useState([]);

    const fullPrice = (selectProductIds) => {
        let sum = 0;
        products.map((product) => selectProductIds.indexOf(product.id) !== -1 ? sum += product.price: null);
        return sum;
    }

    const [adress, setAdress] = useState("");

    const selectProducts = selectProductIds.map((id) => products.find((product) => product.id === id));
    
    const Message = () => {
        alert(`
            Спасибо за заказ, вы купили: 
            ${selectProducts.map((product) => `${product.name} - ${product.weight}гр.\n`)}
            На общую сумму: ${fullPrice(selectProductIds)} руб.
            Доставка по адресу: ${adress}
        `)
    }

    const handleOnClickProduct = (value, index) => {
        if (!selectProductIds.includes(value)) {
            swiperRef.slideTo(index, 1500);
            console.log(index);
          }
    }

    return (
        <FormSection>
            <StyledForm>
                <StyledFieldset>
                    <Title level="3" size="small">Выберите продукты</Title>
                    <CheckboxList name="products" options={products.map((product) => ({title: product.name, value: product.id}))} labelComponent={StyledCheckbox} selectValues={selectProductIds} onChange={setSelectProductIds} onClickLabel={handleOnClickProduct}/>
                </StyledFieldset>
                <StyledFieldset submit>
                    <Title level="3" size="small">Сделать заказ</Title>
                    <AdressInput value={adress} onChange={(evt) => setAdress(evt.target.value)} placeholder="Введите адрес доставки"/>
                    <PriceLabel className>Цена</PriceLabel>
                    <PriceValue className value={fullPrice(selectProductIds)}/>
                    <SubmitButton disabled={!(selectProductIds.length > 0 && adress)} onClick={() => Message()}>Купить</SubmitButton>
                </StyledFieldset>       
            </StyledForm>
        </FormSection>
    )
}