// DataModal.tsx
import React, { useState } from "react";
import { LucideMoreVertical, LucideX, LucideSearch, LucideSliders } from "lucide-react";
import { ModalOverlay, ModalContainer, ModalHeader, ModalBody, ModalFooter, Table, TableHeader, TableRow, TableCell, ActionsMenu, SearchBar, FilterIcon, CloseButton, SearchContainer, SearchBarWrapper, ActionsIconWrapper } from "./DataModal.style.ts";

interface DataModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, any>[];
  showSearchBar?: boolean;
  showFilterIcon?: boolean;
}

const DataModal: React.FC<DataModalProps> = ({ isOpen, onClose, data, showSearchBar = false, showFilterIcon = false }) => {
  const [openRowMenu, setOpenRowMenu] = useState<number | null>(null);

  if (!isOpen) return null;

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  //recuerda que se debe de comentar el tema del filtro,lo dejamos para futuras implementaciones

  return (
    <ModalOverlay>
      <ModalContainer>
        {/* Header */}
        <ModalHeader>
          <h2>Datos</h2>
          <CloseButton onClick={onClose}><LucideX size={20} /></CloseButton>
        </ModalHeader>

        {/* Opcionales: búsqueda y filtro */}
        <ModalBody>
          {(showSearchBar || showFilterIcon) && (
            <SearchContainer>
              {showSearchBar && (
                <SearchBarWrapper>
                  <SearchBar placeholder="Buscar..." onChange={(e) => console.log(e.target.value)} />
                  <LucideSearch size={18} />
                </SearchBarWrapper>
              )}
              {showFilterIcon && <FilterIcon onClick={() => alert("Filtrar")}><LucideSliders size={20} /></FilterIcon>}
            </SearchContainer>
          )}

          {/* Tabla */}
          <Table>
            <thead>
              <TableRow>
                {columns.map((col) => (
                  <TableHeader key={col} onClick={() => alert(`Ordenar por ${col}`)}>
                    {col}
                  </TableHeader>
                ))}
                <TableHeader>Acciones</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((col) => (
                    <TableCell key={col}>{row[col]}</TableCell>
                  ))}
                  <TableCell>
                    <ActionsIconWrapper onClick={() => setOpenRowMenu(openRowMenu === index ? null : index)}>
                      <LucideMoreVertical size={20} />
                      {openRowMenu === index && (
                        <ActionsMenu>
                          <button onClick={() => alert("Acción 1")}>Acción 1</button>
                          <button onClick={() => alert("Acción 2")}>Acción 2</button>
                        </ActionsMenu>
                      )}
                    </ActionsIconWrapper>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </ModalBody>

        {/* Footer */}
        <ModalFooter>
          {data.length} registro{data.length !== 1 ? "s" : ""}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DataModal;
