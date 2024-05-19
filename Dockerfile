# Etapa 1: Construir la aplicación Angular
FROM node:16-alpine AS build

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build --prod

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:alpine

# Copiar los archivos construidos de la etapa 1
COPY --from=build /app/dist/ventas-front /usr/share/nginx/html

RUN rm etc/nginx/conf.d/default.conf

# Copiar archivo de configuración de NGINX
#COPY nginx.conf /etc/nginx/nginx.conf

COPY nginx.conf etc/nginx/conf.d/default.conf
# Copiar archivo de tipos MIME
COPY mime.types /etc/nginx/mime.types

# Exponer el puerto
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]