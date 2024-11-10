import { useEffect, useState } from "react";
import {
  TopicosConteiner,
  Titulo,
  Topicos,
  TableHeader,
  TableRow,
  TableCell,
  PaginationContainer,
  PaginationButton,
  PaginationText,
  CategoriaButton,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faArrowLeft,
  faArrowRight,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { api } from "../../../services/app";

const TrendingTopics = ({ id, handleSelectTopic }) => {
  const [topics, setTopics] = useState([]);
  const [categoria, setCategoria] = useState("BR");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchTopics();
  }, [categoria, page, limit, sortField, sortOrder]);

  const fetchTopics = async () => {
    try {
      const response = await api.get(
        `/v1/trends?category=${categoria}&page=${page}&limit=${limit}${
          sortField ? `&sortBy=${sortField}&order=${sortOrder}` : ""
        }`
      );
      setTopics(response.data.trends);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    }
  };

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleOrder = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategoria(newCategory);
    setPage(1);
  };

  return (
    <TopicosConteiner id={id}>
      <Titulo>
        <h1>Em alta</h1>
        <div className="linha"></div>
      </Titulo>
      <div>
        <CategoriaButton
          isSelected={categoria === "BR"}
          onClick={() => handleCategoryChange("BR")}
        >
          BRASIL
        </CategoriaButton>
        <CategoriaButton
          isSelected={categoria === "US"}
          onClick={() => handleCategoryChange("US")}
        >
          MUNDIAL
        </CategoriaButton>
      </div>
      <Topicos>
        <thead>
          <TableRow>
            <TableHeader>
              Tendências
              <FontAwesomeIcon
                icon={faSort}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => handleOrder("title")}
              />
            </TableHeader>
            <TableHeader>
              Volume de pesquisa
              <FontAwesomeIcon
                icon={faSort}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => handleOrder("formatted_traffic")}
              />
            </TableHeader>
            <TableHeader>
              Iniciado
              <FontAwesomeIcon
                icon={faSort}
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={() => handleOrder("time_ago")}
              />
            </TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <TableRow key={index}>
              <TableCell>{topic.title}</TableCell>
              <TableCell>{topic.formatted_traffic}</TableCell>
              <TableCell>{topic.time_ago}</TableCell>
              <TableCell>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ cursor: "pointer", color: "#034C8C" }}
                  onClick={() => handleSelectTopic(topic.title)}
                />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Topicos>

      <PaginationContainer>
        <PaginationButton onClick={prevPage} disabled={page === 1}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PaginationButton>
        <PaginationText>
          Página {page} de {totalPages}
        </PaginationText>
        <PaginationButton onClick={nextPage} disabled={page === totalPages}>
          <FontAwesomeIcon icon={faArrowRight} />
        </PaginationButton>
      </PaginationContainer>
    </TopicosConteiner>
  );
};

export default TrendingTopics;
