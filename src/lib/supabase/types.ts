export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ongs: {
        Row: {
          city: string | null
          cnpj: string | null
          cover: string
          created_at: string
          description: string
          email: string
          id: number
          occupation: string
          phone: string | null
          site: string | null
          title: string
        }
        Insert: {
          city?: string | null
          cnpj?: string | null
          cover: string
          created_at?: string
          description: string
          email: string
          id?: number
          occupation: string
          phone?: string | null
          site?: string | null
          title: string
        }
        Update: {
          city?: string | null
          cnpj?: string | null
          cover?: string
          created_at?: string
          description?: string
          email?: string
          id?: number
          occupation?: string
          phone?: string | null
          site?: string | null
          title?: string
        }
        Relationships: []
      }
      ongs_old: {
        Row: {
          atuacao: string | null
          contato: string | null
          created_at: string
          descricao: string | null
          id: number
          localizacao: string | null
          logo: string | null
          nome: string | null
        }
        Insert: {
          atuacao?: string | null
          contato?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          localizacao?: string | null
          logo?: string | null
          nome?: string | null
        }
        Update: {
          atuacao?: string | null
          contato?: string | null
          created_at?: string
          descricao?: string | null
          id?: number
          localizacao?: string | null
          logo?: string | null
          nome?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string
          id: string
          name: string | null
          role: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          role?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      users_ongs: {
        Row: {
          created_at: string
          id: number
          ong_id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          ong_id: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          ong_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'users_ongs_ong_id_fkey'
            columns: ['ong_id']
            isOneToOne: false
            referencedRelation: 'ongs'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'users_ongs_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never
