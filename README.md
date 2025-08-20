# Design System

Um design system React + TypeScript com Storybook para documentação e testes automatizados.

## Instalação

```bash
npm install @leomayca/design-system
```

## Uso

```tsx
import { Button, Input } from '@leomayca/design-system'

// Button
<Button variant="solid" color="primary" size="md">
  Clique aqui
</Button>

<Button variant="outlined" color="secondary">
  Botão Outlined
</Button>

// Input
<Input 
  label="Email" 
  placeholder="Digite seu email"
  required
  helperText="Campo obrigatório"
/>

<Input 
  variant="error" 
  helperText="Email inválido"
/>
```

## Componentes

### Button
- **Variants**: `solid`, `outlined`, `text`
- **Colors**: `primary`, `secondary`
- **Sizes**: `sm`, `md`, `lg`
- **States**: `disabled`

### Input
- **Sizes**: `sm`, `md`, `lg`
- **Variants**: `error`, `success`
- **Features**: `label`, `required`, `helperText`, `disabled`

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar Storybook
npm run storybook

# Rodar testes
npm run test

# Build
npm run build
```

## Design Tokens

O design system inclui tokens para:
- **Cores**: Primary, Secondary, Success, Danger, Grays (50-900)
- **Espaçamentos**: XS, SM, MD, LG, XL
- **Tipografia**: Tamanhos e pesos consistentes