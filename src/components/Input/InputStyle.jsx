// import styled component 
import styled from "styled-components";

export const InputSpace = styled.input`
    padding: 1rem;
    border-radius: 7px;
    border: 1.5px solid #ccc;
    outline: none;
    font-size: 16px;

    &:focus {
        border: 1.5px solid #6D28D9;
    }
`

// padding: 0.8rem 1rem; /* Adicionei um pouco mais de espaço acima e abaixo */
//     border-radius: 5px; /* Reduzi o raio da borda para torná-lo mais sutil */
//     border: 1px solid #ced4da; /* Ajustei a espessura da borda e a cor para um tom mais neutro */
//     outline: none;
//     font-size: 1rem; /* Utilizei a unidade 'rem' para garantir uma escala mais consistente */
//     transition: border-color 0.3s ease; /* Adicionei uma transição suave para a mudança de cor da borda */

//     &:focus {
//         border-color: #007bff; /* Cor da borda quando o input está focado */
//     }

//     &::placeholder {
//         color: #6c757d; /* Cor do placeholder para um tom mais suave */
//     }

//     /* Adicionei uma regra para quando o input está desativado */
//     &:disabled {
//         background-color: #e9ecef; /* Cor de fundo quando o input está desativado */
//         color: #adb5bd; /* Cor do texto quando o input está desativado */
//         cursor: not-allowed; /* Cursor de não permitido quando o input está desativado */
//     }
// `;