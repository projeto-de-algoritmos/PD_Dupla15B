import React, { useState } from "react";

import "./styles.css";
import {
  Container,
  Header,
  MarketBody,
  ItensDiv,
  SingleItem,
  ItenDescription,
  Price,
  Column,
  MoneyBox,
  MoneyText,
  MoneyInput,
  ButtonCollection,
  FocusType,
  Image,
  Button,
} from "./styles";

import ProductModal from "../componentes/ProductModal";
import CartModal from "../componentes/CartModal";
import { useGlobals } from "../hooks/index";

function Home() {
  const [adventure, setAdventure] = useState("");
  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [money, setMoney] = useState("");
  const { products } = useGlobals();
  return (
    <Container>
      <Image
        src="https://i.pinimg.com/originals/4d/b5/91/4db591ae76ad5c18c7bd498347684374.jpg"
        style={{
          zIndex: -1,
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: 0.3,
        }}
      />
      <Header>
        <p>Pokemart</p>
      </Header>
      <MarketBody>
        <ItensDiv>
          {products.map((item) => (
            <SingleItem
              onClick={() => {
                setOpen(true);
                setProduct(item);
              }}
            >
              <Image src={item.sprite} />
              <ItenDescription>
                <div style={{ alignSelf: "center" }}>
                  <p style={{ fontSiz: 10, textAlign: "center" }}>
                    {item.name}
                  </p>
                </div>
              </ItenDescription>
              <Price>
                <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
                <p
                  style={{ marginTop: 0, marginLeft: 25 }}
                >{`₽ ${item.cost}`}</p>
              </Price>
            </SingleItem>
          ))}
        </ItensDiv>

        <Column>
          <MoneyBox>
            <MoneyText> Money</MoneyText>
            <MoneyInput onChange={(v) => setMoney(v.target.value)} />
          </MoneyBox>
          <ButtonCollection>
            <p>Escolhe o seu tipo de aventura</p>
            <FocusType
              onClick={() => setAdventure("batalha")}
              selected={adventure === "batalha"}
            >
              <p>Batalha</p>
            </FocusType>
            <FocusType
              onClick={() => setAdventure("captura")}
              selected={adventure === "captura"}
            >
              <p>Captura</p>
            </FocusType>
            <FocusType
              onClick={() => setAdventure("viagem")}
              selected={adventure === "viagem"}
            >
              <p>Viagem</p>
            </FocusType>
            <Button onClick={() => setOpenCart(true)}>
              <p>Finalizar compra</p>
            </Button>
          </ButtonCollection>
        </Column>
      </MarketBody>
      <ProductModal open={open} setOpen={setOpen} product={product} />
      <CartModal
        open={openCart}
        setOpen={setOpenCart}
        money={money}
        adventure={adventure}
      />
    </Container>
  );
}

export default Home;
