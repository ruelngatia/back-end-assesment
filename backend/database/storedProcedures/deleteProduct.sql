create or alter procedure deleteProduct(@id int) 
	as 
begin
	update products   set  deleted = 1   where id = @id
end 
go