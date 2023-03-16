import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from '../Logo'
import * as S from './styles'

const Menu = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true)

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <MenuIcon aria-label="Open Menu" onClick={() => setIsHidden(false)} />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={isHidden} isHidden={isHidden}>
        <CloseIcon aria-label="close menu" onClick={() => setIsHidden(true)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
