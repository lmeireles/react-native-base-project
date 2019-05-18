import styled from 'styled-components';
import theme from "../../components/theme";

export const List = styled.FlatList`;
  min-height: 200px;
  width: 100%;
  flex: 1;
`;

export const PostItemHolder = styled.View`
  background-color: ${theme.colors.light};
  border-radius: 3px;
  margin: ${theme.padding}px;
  margin-top: ${p => p.first ? theme.padding : 0}px;
  padding: ${theme.padding}px;
`;
