import React from 'react';
import { Dialog } from '@material-ui/core';
import { Container, SingleItem, Image, ItenDescription, Price } from './styles';
import get from 'lodash/get';
import { Button } from './styles';
import { useGlobals } from '../../hooks/index';

const CartModal = ({ open, setOpen, money, adventure}) => {
  const { cart, cartOptimize } = useGlobals();
  return (
    <Dialog
      onClose={() => setOpen(false)}
      aria-labelledby="simple-dialog-title"
      open={open}
      PaperProps={{ style: { maxWidth: '100%', borderRadius: 20 } }}
    >
      <Container>
        {cart.map(item=>(
          <SingleItem>
            <Image src={get(item, 'sprite', '')} />
            <ItenDescription>
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  {get(item, 'name', '')}
                </p>
              </div>
            </ItenDescription>
            <Price>
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>{`₽ ${get(item, 'cost', '')}`}</p>
            </Price>
          </SingleItem>
        ))}
        

        <Button onClick={()=> {
            cartOptimize(money, adventure);
          }}>
          <p>Otimizar</p>
        </Button>
      </Container>
    </Dialog>
  );
};

export default CartModal;
